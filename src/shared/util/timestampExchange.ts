import {
    isToday,
    differenceInSeconds,
    differenceInMinutes,
    differenceInHours,
    format,
} from 'date-fns';
import { ko } from 'date-fns/locale';
import { Timestamp } from 'firebase/firestore';

const timestampConversion = (date: Timestamp) => {
    const now = new Date();
    const paramDate = date.toDate();

    if (isToday(paramDate)) {
        const seconds = differenceInSeconds(now, paramDate);
        const minutes = differenceInMinutes(now, paramDate);
        const hours = differenceInHours(now, paramDate);

        if (seconds < 60) {
            return `방금`;
        }
        if (minutes < 60) {
            return `${minutes}분 전`;
        }
        return `${hours}시간 전`;
    }
    return format(paramDate, 'yyyy년 MM월 dd일', { locale: ko });
};

export { timestampConversion };
