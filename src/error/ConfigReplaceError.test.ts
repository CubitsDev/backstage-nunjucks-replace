import { ConfigReplaceError } from "./ConfigReplaceError"

describe('ConfigReplaceError test', () => {
    it('builds from the constructor correctly', () => {
        const e: ConfigReplaceError = new ConfigReplaceError({message: "message", wrappedError: new Error("sub error")})
        expect(e.message).toBe("message")
        expect(e.wrappedError.message).toBe("sub error")
    })
})