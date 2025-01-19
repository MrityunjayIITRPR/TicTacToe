export const generateWinningPatterns = (count) => {
  const patterns = [];

  // Generate row patterns
  for (let row = 0; row < count; row++) {
    const rowPattern = [];
    for (let col = 0; col < count; col++) {
      rowPattern.push(row * count + col);
    }
    patterns.push(rowPattern);
  }

  // Generate column patterns
  for (let col = 0; col < count; col++) {
    const colPattern = [];
    for (let row = 0; row < count; row++) {
      colPattern.push(row * count + col);
    }
    patterns.push(colPattern);
  }

  // Generate diagonal patterns
  const diag1 = []; // Top-left to bottom-right
  const diag2 = []; // Top-right to bottom-left
  for (let i = 0; i < count; i++) {
    diag1.push(i * count + i);
    diag2.push((i + 1) * count - (i + 1));
  }
  patterns.push(diag1);
  patterns.push(diag2);

  return patterns;
};
