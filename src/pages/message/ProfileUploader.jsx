import { useEffect, useRef, useState } from 'react';

import defaultImage from '@/assets/images/defaultimage';
import styles from '@/pages/message/ProfileUploader.module.scss';

function ProfileUploader({ imageFile, setImageFile }) {
  //미리보기 URL
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();
  const thumbnailList = [preview].filter(Boolean); // 일단 선택된 이미지만 하나 보여주기

  useEffect(() => {
    if (!imageFile) {
      setPreview(null);
      return;
    }

    //imageFile 바뀌면 임시 URL 만들어서 preview에 넣어줌
    const objectUrl = URL.createObjectURL(imageFile);
    setPreview(objectUrl);

    //컴포넌트 사라질 때 메모리 정리
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  //사진 클릭 시, input 창에 연결
  const handleClick = () => {
    inputRef.current.click();
  };

  //파일 선택 시 첫번째 파일 상태에 저장
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>프로필 이미지</label>
      <div className={styles.previewRow}>
        <div className={styles.profileImage} onClick={handleClick}>
          <img
            src={preview || defaultImage}
            alt='프로필 미리보기'
            className={styles.image}
          />
        </div>
        <p className={styles.caption}>프로필 이미지를 선택해주세요!</p>
      </div>

      <div className={styles.thumbnailRow}>
        {thumbnailList.map((img, i) => (
          <div key={i} className={styles.thumbnail}>
            <img src={img} alt={`썸네일 ${i}`} />
          </div>
        ))}
      </div>
      <input
        type='file'
        accept='image/*'
        ref={inputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default ProfileUploader;
