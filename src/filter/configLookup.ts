import { Config } from "@backstage/config"
import { JsonValue } from "@backstage/types"
import { ConfigReplaceError } from "../error"

export const configLookup: (config: Config) => (input: JsonValue) => string = (config: Config) => {
    return (input: JsonValue): string => {
        try {
            for (const item of config.getConfigArray('nunjucks-replace.replacements')) {
                if (item.getString(`placeholder`) == input?.toString()) {
                    return item.getString(`replacement`)
                }
            }
        } catch (e: any) {
            throw new ConfigReplaceError({message: e.message, wrappedError: e})
        }
        return "undefined"
    }
}
