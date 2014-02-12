'use strict'
requirejs.config paths:
  jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min"

define ['jquery', 'sinon'], ($, sinon) ->
  ajax = ->
    'ajax call'
  ajax.endpoint = (url) ->
    req = $.ajax
      url: url
    req.done (e) ->
      return e
    url
  ajax.setup = (arg) ->
    url = arg.url || ''
    setup = (->
      $.ajaxSetup =
        url: url
    )()
    arg.url ? arg


  ajax: ajax
  endpoint: ajax.endpoint
  setup: ajax.setup
  # jquery: $
