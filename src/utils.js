/**
 * This function will take the checkbox ids and the previous state array and
 * return it to the new array.
 *
 * @param {number} checkboxId - The current checkbox id.
 * @param {number[]} previousState - The previous state of checkbox ids.
 * @returns {number[]} - Returns the new state of checkbox ids.
 */
 export const handleToggle = (checkboxId, previousState) => {
    const currentIndex = previousState.indexOf(checkboxId);
    let newCheckedArray = [...previousState];
    if (currentIndex === -1) {
      if (checkboxId === 0) {
        newCheckedArray = [];
      } else {
        const filtered = newCheckedArray.filter((item) => item !== 0);
        newCheckedArray = [...filtered];
      }
      newCheckedArray.push(checkboxId);
    } else {
      newCheckedArray.splice(currentIndex, 1);
    }
    return newCheckedArray.sort((a, b) => a - b);
  };
  