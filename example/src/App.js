import React from 'react'

import ExampleComponent from 'masspa-ecarosel-product'
import 'masspa-ecarosel-product/dist/index.css'

const App = () => {
  return (
    <ExampleComponent
      imageUrl={[
        'https://images.unsplash.com/photo-1596121051529-04b207e81c4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1596132197871-229f07a945ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1596138827506-31cdfc572aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80',
        'https://images.unsplash.com/photo-1594829994034-0fab6cceb357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80',
        'https://images.unsplash.com/photo-1595846265893-f433f6cca81d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
      ]}
      imagesReview={[
        'https://images.unsplash.com/photo-1596121051529-04b207e81c4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1596132197871-229f07a945ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1596138827506-31cdfc572aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80',
        'https://images.unsplash.com/photo-1594829994034-0fab6cceb357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80'
      ]}
      featureList={[
        'Chất liệu cao cấp',
        'Độ bám cao, chống trơn trợt',
        'Vệ sinh thảm tập dễ dàng'
      ]}
      price='400.000 d'
      madeIn='Korea'
      sku='6520072406844'
      title='Mặt nạ Cam Thảo/ ORGANIC LICORICE POWDER (facial Mask)'
      stars={4}
      titleBottom={'Actual image from customers'}
    />
  )
}

export default App
