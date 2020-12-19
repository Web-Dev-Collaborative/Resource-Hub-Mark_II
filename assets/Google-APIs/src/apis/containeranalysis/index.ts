// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {containeranalysis_v1alpha1} from './v1alpha1';
import {containeranalysis_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1alpha1: containeranalysis_v1alpha1.Containeranalysis,
  v1beta1: containeranalysis_v1beta1.Containeranalysis,
};

export function containeranalysis(
  version: 'v1alpha1'
): containeranalysis_v1alpha1.Containeranalysis;
export function containeranalysis(
  options: containeranalysis_v1alpha1.Options
): containeranalysis_v1alpha1.Containeranalysis;
export function containeranalysis(
  version: 'v1beta1'
): containeranalysis_v1beta1.Containeranalysis;
export function containeranalysis(
  options: containeranalysis_v1beta1.Options
): containeranalysis_v1beta1.Containeranalysis;
export function containeranalysis<
  T =
    | containeranalysis_v1alpha1.Containeranalysis
    | containeranalysis_v1beta1.Containeranalysis
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1alpha1'
    | containeranalysis_v1alpha1.Options
    | 'v1beta1'
    | containeranalysis_v1beta1.Options
) {
  return getAPI<T>('containeranalysis', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {containeranalysis_v1alpha1};
export {containeranalysis_v1beta1};
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
