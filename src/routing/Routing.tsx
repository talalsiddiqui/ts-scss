import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LocalizeContextProps, withLocalize } from 'react-localize-redux'
import { renderToStaticMarkup } from 'react-dom/server'
import english from '../translations/en.json'
import swedish from '../translations/sv.json'
import Home from '../pages/home'

interface IRoutingProps extends LocalizeContextProps {}

const Routing = ({ initialize, addTranslationForLanguage }: IRoutingProps) => {
  useEffect(() => {
    initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'Swedish', code: 'sv' },
      ],
      options: {
        renderToStaticMarkup,
        defaultLanguage: 'sv',
      },
    })
    addTranslationForLanguage(english, 'en')
    addTranslationForLanguage(swedish, 'sv')
    // initialize and addtranslationForLanugage appear to change every call
    // and hence adding them as dependencies causes an infinite loop.
    // As they're provided by the library, I don't think there's anything we can do about it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default withLocalize(Routing)
