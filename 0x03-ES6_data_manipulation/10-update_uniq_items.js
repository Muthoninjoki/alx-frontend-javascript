export default function updateUniqueItems(map) {
    const list = map;

    if (list instaceof Map) {
        for (const [key, value] of list) {
            if (value === 1) {
                list.set(key, 100);
            }
        }
    } else {
        throw new Error('Cannot process');
    }
    return list;
}
