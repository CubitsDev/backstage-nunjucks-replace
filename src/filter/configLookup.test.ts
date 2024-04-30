import { ConfigReplaceError } from '../error';
import { configLookup } from './configLookup';
import { ConfigReader } from '@backstage/config';
import { JsonValue } from '@backstage/types';

describe('configLookup', () => {
    it('returns the expected string when passed a valid config object', () => {
        var returnedFunc: (input: JsonValue) => string = configLookup(new ConfigReader({"nunjucks-replace": {"replacements": [{"placeholder": "test", "replacement": "new string"}]}}));
        expect(returnedFunc("test")).toBe("new string")
    })
    it('returns a string of "undefined" when passed a valid config object, without a matching replacement', () => {
        var returnedFunc: (input: JsonValue) => string = configLookup(new ConfigReader({"nunjucks-replace": {"replacements": [{"placeholder": "test", "replacement": "new string"}]}}));
        expect(returnedFunc("this isn't a key!")).toBe("undefined")
    })
    it('throws a ConfigReplaceError when no config is defined', () => {
        var returnedFunc: (input: JsonValue) => string = configLookup(new ConfigReader({}));
        try {
            returnedFunc("string")
            // fail test if we don't throw
            expect(true).toBe(false);
        } catch(e: any) {
            expect(e).toBeInstanceOf(ConfigReplaceError)
            expect(e.message).toBe("Missing required config value at 'nunjucks-replace.replacements' in 'mock-config'")
        }   
    })
})