export function parseDateFromDDMMYYYY(date: string): Date {
    const [day, month, year] = date.split("/").map(Number);
    return new Date(year, month - 1, day);
}

export function parseDateFromDDMMYYYYHHMM(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/').map(num => parseInt(num, 10));
    const [hours, minutes] = timePart.split(':').map(num => parseInt(num, 10));

    return new Date(year, month - 1, day, hours, minutes);
}
