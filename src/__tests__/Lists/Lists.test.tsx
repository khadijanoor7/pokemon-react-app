import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Lists from 'pages/Lists'
import { PokemonData, PokemonsList } from '../../types'
import { useGetPokemonsQuery } from '../../api/index'

jest.mock('../../api/index')

describe('Lists Component', () => {
  test('renders loading message while fetching data', async () => {
    const mockData: PokemonsList = {
      data: { results: [], count: 0 },
      error: false,
      isLoading: true,
    }

    ;(useGetPokemonsQuery as jest.Mock).mockReturnValue(mockData)

    render(
      <MemoryRouter>
        <Lists />
      </MemoryRouter>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('renders error message if data fetching fails', async () => {
    const mockData: PokemonsList = {
      data: { results: [], count: 0 },
      error: true,
      isLoading: false,
    }

    ;(useGetPokemonsQuery as jest.Mock).mockReturnValue(mockData)

    render(
      <MemoryRouter>
        <Lists />
      </MemoryRouter>
    )

    expect(screen.getByText('Error...')).toBeInTheDocument()
  })

  test('renders list of pokemons', async () => {
    const mockPokemons: PokemonData[] = [
      { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25' },
      { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' },
    ]
    
    const mockData: PokemonsList = {
      data: { results: mockPokemons, count: 2 },
      error: false,
      isLoading: false,
    }

    ;(useGetPokemonsQuery as jest.Mock).mockReturnValue(mockData)

    render(
      <MemoryRouter>
        <Lists />
      </MemoryRouter>
    )

    mockPokemons.forEach((pokemon) => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument()
    })
  })

  test('redirects to correct pokemon page when clicked', async () => {
    const mockPokemons: PokemonData[] = [
      { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25' },
      { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1' },
    ]

    const mockData: PokemonsList = {
      data: { results: mockPokemons, count: 2 },
      error: false,
      isLoading: false,
    }
    
    ;(useGetPokemonsQuery as jest.Mock).mockReturnValue(mockData)

    render(
      <MemoryRouter>
        <Lists />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText('Pikachu'))

    expect(window.location.href).toEqual('http://localhost/')
  })
})
