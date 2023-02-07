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

      const calcClassItem = Object.entries(classItem)
        .filter(([_, value]) => value)
        .map(([key]) => key)
        .join(' ');

        return [...result, calcClassItem]
    }, [])
    .join(' ');
}