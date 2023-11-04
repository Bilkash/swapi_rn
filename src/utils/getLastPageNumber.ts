export default function getLastPageNumber(
  itemCount: number,
  itemsPerPage: number,
) {
  return Math.ceil(itemCount / itemsPerPage);
}
