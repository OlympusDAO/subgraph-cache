export type HandlerResult = {
    status: number;
    message: string;
}

export const handler = (): HandlerResult => {
    console.log("etc etc");

    return {
        status: 200,
        message: "",
    }
}