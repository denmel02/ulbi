type NegativeValue = false | undefined | null | 0;

type Class = string | NegativeValue | Record<string, NegativeValue | true>;

export const classNames = (...classes: Class[]): string => {
    return classes
        .reduce((result, classItem) => {
            if (!classItem) {
                return result;
            }

            if (typeof classItem === 'string') {
                return [...result, classItem];
            }

            const calcClassItem = Object.keys(classItem)
                .filter((key) => classItem[key])
                .join(' ');

            return [...result, calcClassItem];
        }, [])
        .join(' ');
};