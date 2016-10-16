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
  viewer {
    pokemon(name: "Pikachu") {
      id
      number
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
        number
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
}
```

> Try this query [here][graphiql-interface-query]!

### [Click here to use GraphiQL interface][graphiql-interface]

### Check out the [React Relay Pokémon Project][react-relay-pokemon-repo] and [Live Demo][react-relay-pokemon] too!

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

[graphiql-interface]: https://graphql-pokemon.now.sh/
[react-relay-pokemon]: https://react-relay-pokemon.now.sh/
[react-relay-pokemon-repo]: https://github.com/lucasbento/react-relay-pokemon
[graphiql-interface-query]: https://graphql-pokemon.now.sh/?query=%7B%0A%20%20viewer%20%7B%0A%20%20%20%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20number%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20attacks%20%7B%0A%20%20%20%20%20%20%20%20special%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20damage%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20evolutions%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20number%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20weight%20%7B%0A%20%20%20%20%20%20%20%20%20%20minimum%0A%20%20%20%20%20%20%20%20%20%20maximum%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20attacks%20%7B%0A%20%20%20%20%20%20%20%20%20%20fast%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20type%0A%20%20%20%20%20%20%20%20%20%20%20%20damage%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D
