export interface ResultHandler<T = never> {
    onSuccess?: (...data: T extends never ? [never] : [T]) => void; //Weryfikuje, czy T jest podane, jeżeli nie to typuje parametr jako never
    onError?: (err: Error) => void
}