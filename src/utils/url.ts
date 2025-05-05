export default function getAsset(path: string) {
    const pathArr = path.split('/');
    switch (pathArr.length) {
        case 1:
            return new URL(`/src/assets/${path}`, import.meta.url).href;
        case 2:
            return new URL(`/src/assets/${pathArr[0]}/${pathArr[1]}`, import.meta.url).href;
        case 3:
            return new URL(
                `/src/assets/${pathArr[0]}/${pathArr[1]}/${pathArr[2]}`,
                import.meta.url
            ).href;
        default:
            throw new Error('Invalid path');
    }
}