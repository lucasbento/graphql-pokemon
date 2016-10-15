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

[graphiql-interface]: https://graphql-pokemon-cjyetthuij.now.sh/
[graphiql-interface-query]: https://graphql-pokemon-cjyetthuij.now.sh/?query=%7B%0A%20%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20attacks%20%7B%0A%20%20%20%20%20%20special%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20damage%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20evolutions%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20weight%20%7B%0A%20%20%20%20%20%20%20%20minimum%0A%20%20%20%20%20%20%20%20maximum%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20attacks%20%7B%0A%20%20%20%20%20%20%20%20fast%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20damage%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D
