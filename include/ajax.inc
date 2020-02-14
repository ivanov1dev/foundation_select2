<?php

function ajax_command_select2_add_option($selector, $data) {
  return [
    'command' => 'select2_add_option',
    'selector' => $selector,
    'data' => $data,
  ];
}
