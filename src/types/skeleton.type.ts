
export enum SkeletonNumbers {
    cirkular = 'cirkular',
    rectangular = 'rectangular',
    rounded = 'rounded',
    text = 'text'
}
export interface ISkeleton {
    variant: SkeletonNumbers;
    width: number;
    height: number
}