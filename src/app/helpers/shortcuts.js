import React from 'react';
import { Machine } from 'stent';
import Editor from '../components/Editor';
import Search from '../components/Search';

Mousetrap.bind('ctrl+u', function (e) {
  Machine.get('Weather').refresh();
});
Mousetrap.bind('enter', function (e) {
  Machine.get('Sidebar').open(<Editor />);
});
Mousetrap.bind('shift+enter', function (e) {
  Machine.get('Sidebar').open(<Search />);
});
Mousetrap.bind('escape', function (e) {
  Machine.get('Sidebar').close();
});
