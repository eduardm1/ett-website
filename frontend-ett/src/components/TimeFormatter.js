const TimeFormatter = (time) => {
  const split = time.split(":");
  return split[0]+":"+split[1];
}
export default TimeFormatter;