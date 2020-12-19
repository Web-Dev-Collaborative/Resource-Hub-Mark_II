// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {admob_v1} from './v1';
import {admob_v1beta} from './v1beta';

export const VERSIONS = {
  v1: admob_v1.Admob,
  v1beta: admob_v1beta.Admob,
};

export function admob(version: 'v1'): admob_v1.Admob;
export function admob(options: admob_v1.Options): admob_v1.Admob;
export function admob(version: 'v1beta'): admob_v1beta.Admob;
export function admob(options: admob_v1beta.Options): admob_v1beta.Admob;
export function admob<T = admob_v1.Admob | admob_v1beta.Admob>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | admob_v1.Options | 'v1beta' | admob_v1beta.Options
) {
  return getAPI<T>('admob', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {admob_v1};
export {admob_v1beta};
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
