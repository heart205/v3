export interface changeCanvasType {
  (e: Event, field: string): void
  timer?: number | NodeJS.Timeout
}
