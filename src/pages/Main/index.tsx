import React, { useEffect, useState } from 'react'
import { GoRepo } from 'react-icons/go'

import api from '../../shared/contants/files'
import {
  ESCAPE_CODE,
  HOTKEY_CODE,
  UP_ARROW_CODE,
  DOWN_ARROW_CODE,
} from '../../shared/contants/keyCodes'
import { ItemI } from '../../shared/models'
import Info from './components/Info'
import Search from './components/Search'
import List from './components/List'
import { Container, SearchBar, InfoBar, Columns, Col, Title } from './styles'

const Main = () => {
  const [dataList, setDataList] = useState<ItemI[]>(api)
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)

  const handleEvent = (event: any) => {
    const keyCode = event.keyCode || event.which

    switch (keyCode) {
      case HOTKEY_CODE:
        if (api) {
          setIsSearch(true)
          setDataList(api.filter(item => item.type === 'file'))
        }
        break
      case ESCAPE_CODE:
        setIsSearch(false)
        setDataList(api)
        break
      case UP_ARROW_CODE:
        if (counter > 0) {
          setCounter(counter - 1)
        }
        break
      case DOWN_ARROW_CODE:
        if (counter < dataList.length - 1) {
          setCounter(counter + 1)
        }
        break
      default:
        break
    }
  }

  const handleSearch = (search: string): void => {
    const pattern = new RegExp(search, 'gi')
    setDataList(
      search
        ? api
            .filter(
              item =>
                item.name.toLowerCase().indexOf(search.toLowerCase()) > -1 &&
                item.type === 'file',
            )
            .map(item => {
              return {
                ...item,
                name: item.name.replace(pattern, match => {
                  return `<mark>${match}</mark>`
                }),
              }
            })
        : api.filter(item => item.type === 'file'),
    )
    setCounter(0)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEvent)

    return () => {
      window.removeEventListener('keydown', handleEvent)
    }
  })

  return (
    <Container>
      {isSearch && (
        <>
          <SearchBar>
            <Title>
              <GoRepo color="#9b9b9b" size="20" />
              Project Name <strong>/</strong>
            </Title>
            <Search setSearch={handleSearch} />
          </SearchBar>
          <InfoBar>
            <Info />
          </InfoBar>
        </>
      )}
      <Columns>
        <Col>
          {isSearch ? (
            <List data={dataList} counter={counter} isSearch={isSearch} />
          ) : (
            <List data={dataList} />
          )}
        </Col>
        <Col>Nav Wrap</Col>
      </Columns>
    </Container>
  )
}

export default Main
