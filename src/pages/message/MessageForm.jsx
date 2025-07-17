import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ContentEditor from '@/pages/message/ContentEditor';
import FontSelector from '@/pages/message/FontSelector';
import InputField from '@/components/layout/InputField';
import styles from '@/pages/message/MessageForm.module.scss';
import ProfileUploader from '@/pages/message/ProfileUploader';
import RelationshipSelect from '@/pages/message/RelationshipSelect';

function MessageForm() {
  // 추후 페이지 이동 시 사용
  const { id } = useParams();
  const navigate = useNavigate();

  const [from, setFrom] = useState('');
  const [relationship, setRelationship] = useState('지인');
  const [content, setContent] = useState('');
  const [font, setFont] = useState('noto-sans');
  const [imageFile, setImageFile] = useState(null);

  return (
    <form className={styles.form}>
      <InputField
        id='from'
        label='From.'
        placeholder='이름을 입력해주세요'
        value={from}
        onChange={setFrom}
        onBlur={handleFromBlur}
        error={fromError}
      />
      <ProfileUploader imageFile={imageFile} setImageFile={setImageFile} />
      <RelationshipSelect value={relationship} onChange={setRelationship} />
      <ContentEditor value={content} onChange={setContent} />
      <FontSelector value={font} onChange={setFont} />
      <button type='button'>생성하기</button>
    </form>
  );
}

export default MessageForm;
