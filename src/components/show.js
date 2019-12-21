import Vue from 'vue'

import Endit from './EnditCard'

const createEndit = (options, BindID) => {
  
  let bindPhone = document.createElement('div')
  
  bindPhone.setAttribute('id', 'Endit_Card')
  document.getElementById(BindID).appendChild(bindPhone)

  return new Vue({
    render: (h) => {
      return h(
        Endit,
        {
          props: {
            date: options.props.date,
            repo_name: options.props.repo_name,
            introduction: options.props.introduction,
            author: options.props.author,
            star: options.props.star,
            pic: options.props.pic
          }
        }
      )
    }
  }).$mount('#Endit_Card')
  
}

export default createEndit