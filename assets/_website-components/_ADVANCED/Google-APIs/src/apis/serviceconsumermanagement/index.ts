// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {serviceconsumermanagement_v1} from './v1';
import {serviceconsumermanagement_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: serviceconsumermanagement_v1.Serviceconsumermanagement,
  v1beta1: serviceconsumermanagement_v1beta1.Serviceconsumermanagement,
};

export function serviceconsumermanagement(
  version: 'v1'
): serviceconsumermanagement_v1.Serviceconsumermanagement;
export function serviceconsumermanagement(
  options: serviceconsumermanagement_v1.Options
): serviceconsumermanagement_v1.Serviceconsumermanagement;
export function serviceconsumermanagement(
  version: 'v1beta1'
): serviceconsumermanagement_v1beta1.Serviceconsumermanagement;
export function serviceconsumermanagement(
  options: serviceconsumermanagement_v1beta1.Options
): serviceconsumermanagement_v1beta1.Serviceconsumermanagement;
export function serviceconsumermanagement<
  T =
    | serviceconsumermanagement_v1.Serviceconsumermanagement
    | serviceconsumermanagement_v1beta1.Serviceconsumermanagement
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | serviceconsumermanagement_v1.Options
    | 'v1beta1'
    | serviceconsumermanagement_v1beta1.Options
) {
  return getAPI<T>(
    'serviceconsumermanagement',
    versionOrOptions,
    VERSIONS,
    this
  );
}

const auth = new AuthPlus();
export {auth};
export {serviceconsumermanagement_v1};
export {serviceconsumermanagement_v1beta1};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  GaxiosPromise,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';