
import { useState, useEffect } from 'react';

interface GridConfig {
  columns: number;
  rows: number;
}

export const useResponsiveGrid = (defaultRows: number = 3) => {
  const [gridConfig, setGridConfig] = useState<GridConfig>({
    columns: 4,
    rows: defaultRows
  });

  useEffect(() => {
    const updateGridConfig = () => {
      const isLarge = window.matchMedia('(min-width: 1024px)').matches;
      const isMedium = window.matchMedia('(min-width: 768px)').matches;

      if (isLarge) {
        setGridConfig({ columns: 12, rows: defaultRows });
      } else if (isMedium) {
        setGridConfig({ columns: 7, rows: defaultRows });
      } else {
        setGridConfig({ columns: 4, rows: defaultRows });
      }
    };

    // Initial check
    updateGridConfig();

    // Add resize listener
    window.addEventListener('resize', updateGridConfig);

    // Cleanup
    return () => window.removeEventListener('resize', updateGridConfig);
  }, [defaultRows]);

  const totalGridItems = gridConfig.columns * gridConfig.rows;

  return { totalGridItems, columns: gridConfig.columns, rows: gridConfig.rows };
};
