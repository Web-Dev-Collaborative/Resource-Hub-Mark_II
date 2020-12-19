// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {cloudshell_v1} from './v1';
import {cloudshell_v1alpha1} from './v1alpha1';

export const VERSIONS = {
  v1: cloudshell_v1.Cloudshell,
  v1alpha1: cloudshell_v1alpha1.Cloudshell,
};

export function cloudshell(version: 'v1'): cloudshell_v1.Cloudshell;
export function cloudshell(
  options: cloudshell_v1.Options
): cloudshell_v1.Cloudshell;
export function cloudshell(version: 'v1alpha1'): cloudshell_v1alpha1.Cloudshell;
export function cloudshell(
  options: cloudshell_v1alpha1.Options
): cloudshell_v1alpha1.Cloudshell;
export function cloudshell<
  T = cloudshell_v1.Cloudshell | cloudshell_v1alpha1.Cloudshell
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | cloudshell_v1.Options
    | 'v1alpha1'
    | cloudshell_v1alpha1.Options
) {
  return getAPI<T>('cloudshell', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {cloudshell_v1};
export {cloudshell_v1alpha1};
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
