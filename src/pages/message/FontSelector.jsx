import styles from '@/pages/message/FontSelector.module.scss';

function FontSelector({ value, onChange }) {
  const FONT_OPTIONS = [
    { label: 'Noto Sans', value: 'noto-sans' }, // 기본값
    { label: 'Pretendard', value: 'pretendard' },
    { label: '나눔손글씨', value: 'nanum' },
  ];

  return (
    <div className={styles.wrapper}>
      <label htmlFor='font' className={styles.label}>
        폰트 선택
      </label>
      <select
        id='font'
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {FONT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FontSelector;
