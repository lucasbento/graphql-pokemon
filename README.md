<p align="center">
  <img src="https://github.com/lucasbento/graphql-pokemon/raw/master/content/logo.png">
</p>

<h1 align="center">GraphQL Pokémon</h1>

<p align="center">
  Get information of a Pokémon with GraphQL!
</p>

## How to use

Simply get Pokémon's information through queries in GraphQL, example:

```javascript
{
  pokemon(name: "Pikachu") {
    id
    name
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
```

> Try this query [here][graphiql-interface-query]!

### [Click here to use GraphiQL interface][graphiql-interface]

## Running

### Production

````sh
  yarn
  npm run build
  npm start
```

### Development

````sh
  yarn
  npm run watch # Using nodemon for auto-reloading
```

[graphiql-interface]: http://graphiql-interface.com/
[graphiql-interface-query]: http://graphiql-interface.com/query
