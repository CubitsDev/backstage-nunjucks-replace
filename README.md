# backstage-nunjucks-replace

A Simple Plugin Module to create custom 'replacement' filters to use on the Backstage scaffolder. For example, accessing a private key from configuration in a step.

## Usage

Add the following to your backstage config:

```yaml
nunjucks-replace:
  replacements:
    - placeholder: <placeholder>
      replacement: <replacementString>
    ...
```

If using the new backend system, you can add the module by simply placing this into your backend:
`backend.add(import('backstage-nunjucks-replace'))`

If using the old system, you will need to specify the config replacement in your scaffolder router like so:

```ts
    return await createRouter({
        ...
        additionalTemplateFilters: {
            configReplace: configLookup(env.config)
        }
    })
```
