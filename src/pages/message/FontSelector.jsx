import styles from '@/pages/message/FontSelector.module.scss';

function FontSelector({ value, onChange }) {
  const FONT_OPTIONS = [
    { label: 'Noto Sans', value: 'noto-sans' }, // 기본값
    { label: 'Pretendard', value: 'pretendard' },
    { label: '나눔손글씨', value: 'nanum' },
  ];

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>폰트 선택</label>
      <div className={styles.options}>
        {FONT_OPTIONS.map((option) => (
          <button
            key={option.value}
            type='button'
            onClick={() => onChange(option.value)}
            className={`$styles.option ${
              value === option.value ? styles.selected : ''
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FontSelector;
