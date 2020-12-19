// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {serviceusage_v1} from './v1';
import {serviceusage_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: serviceusage_v1.Serviceusage,
  v1beta1: serviceusage_v1beta1.Serviceusage,
};

export function serviceusage(version: 'v1'): serviceusage_v1.Serviceusage;
export function serviceusage(
  options: serviceusage_v1.Options
): serviceusage_v1.Serviceusage;
export function serviceusage(
  version: 'v1beta1'
): serviceusage_v1beta1.Serviceusage;
export function serviceusage(
  options: serviceusage_v1beta1.Options
): serviceusage_v1beta1.Serviceusage;
export function serviceusage<
  T = serviceusage_v1.Serviceusage | serviceusage_v1beta1.Serviceusage
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | serviceusage_v1.Options
    | 'v1beta1'
    | serviceusage_v1beta1.Options
) {
  return getAPI<T>('serviceusage', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {serviceusage_v1};
export {serviceusage_v1beta1};
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
