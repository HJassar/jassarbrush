// reference: https://react-hot-toast.com/docs/toast#default-durations
// My estimate of each word is 400ms...
const timePerWord = 400;

export default function calcToastDuration(message: string, defaultDuration: number = 4000) {
    const wordCount = message.split(" ").length;
    const duration = wordCount * timePerWord > defaultDuration ? wordCount * timePerWord : defaultDuration;
    return duration;
}