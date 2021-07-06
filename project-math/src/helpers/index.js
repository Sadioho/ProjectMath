export const filterByResult = (arr1, arr2, item) => {
  return arr1.filter((a) => a.id_question === item.id && a.checked === true)
    .length > 0
    ? "box review"
    : arr2.filter((a) => a.id_question === item.id).length > 0
    ? "box result"
    : "box";
};

//checkked đáp án
export const defaultChecked = (arr1, data, item) => {
  if (item !== null) {
    return (
      arr1.filter(
        (a) =>
          a.result_choise.result_answer === item.result_true &&
          a.id_question === data.id
      ).length !== 0
    );
  }
  return (
    arr1.filter((a) => a.id_question === data.id && a.checked === true)
      .length !== 0
  );
};
// // checked xem lại
// export const defaultCheckedV2 = (arr2, data) => {
//   return (
//     arr2.filter((a) => a.id_question === data.id && a.checked === true)
//       .length !== 0
//   );
// };




