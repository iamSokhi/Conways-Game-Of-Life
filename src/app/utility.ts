import 'jquery';

/**
 * This shall deep clone the seed for comparisons purposes
 * NOTE: This is not a generic deep cloning. This is specific to seed structure
 */
export function _deepClone(seed: any[]) {
  const clonedSeed = [];
  for (let i = 0; i < seed.length; ++i) {
    const clonedRow = [];
    const row = seed[i];
    for (let k = 0; k < row.length; ++k) {
      const clonedCell = {};
      const cell = row[k];
      for (const cellKey in cell) {
        if (typeof cell[cellKey] === 'object') {
          clonedCell[cellKey] = jQuery.extend({}, cell[cellKey]);
        } else {
          clonedCell[cellKey] = cell[cellKey];
        }
      }
      clonedRow.push(clonedCell);
    }
    clonedSeed.push(clonedRow);
  }
  return clonedSeed;
}


/**
 * This shall be used to clear seed if user press new button
 */
export function _clear(seed: any[]) {
  seed.forEach(row => {
    row.forEach(cell => {
      cell.isAlive = false;
    });
  });
}
