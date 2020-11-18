export function formatDescription(description: string) {
    if (description && description.length > 100) {
        return `${description.substr(0, 99)}...`;
    }

    return description;
}

export function formatNumber(num: number) {
    return Math.abs(num) > 999 ? (Math.abs(num) / 1000).toFixed(1) + 'k' : Math.abs(num);
}
