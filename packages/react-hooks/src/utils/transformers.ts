export function infiniteScrollTransformer(
  rawData: any,
  transformedData: unknown
) {
  return rawData.flatMap((data: any) => data.notifications);
}
