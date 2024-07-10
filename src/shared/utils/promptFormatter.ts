const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export function formatAiModel(model: string) {
    const isGPT = model.startsWith("g");
    return isGPT ? model.split("-")[0].toUpperCase() : capitalize(model);
}

export function getPromptIdFromUrl(url: string): number {
    const parts = url.split("-");
    return parseInt(parts[parts.length - 1], 10);
}
