// export function extarctTime(dateString) {
//     const date = new Date(dateString);
//     const hours = padZero(date.getHours());
// 	const minutes = padZero(date.getMinutes());
// 	return `${hours}:${minutes}`;
// }

// function padZero(number) {
//     return number.toString().padStart(2, "0");
// }

export function extarctTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    return formattedDate;
}