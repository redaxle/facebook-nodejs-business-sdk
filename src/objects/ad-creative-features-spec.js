 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdCreativeFeaturesSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeFeaturesSpec extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      advantage_plus_creative: 'advantage_plus_creative',
      app_highlights: 'app_highlights',
      audio: 'audio',
      carousel_to_video: 'carousel_to_video',
      catalog_feed_tag: 'catalog_feed_tag',
      customize_product_recommendation: 'customize_product_recommendation',
      cv_transformation: 'cv_transformation',
      description_automation: 'description_automation',
      dha_optimization: 'dha_optimization',
      ig_glados_feed: 'ig_glados_feed',
      image_auto_crop: 'image_auto_crop',
      image_background_gen: 'image_background_gen',
      image_enhancement: 'image_enhancement',
      image_templates: 'image_templates',
      image_touchups: 'image_touchups',
      image_uncrop: 'image_uncrop',
      inline_comment: 'inline_comment',
      media_liquidity_animated_image: 'media_liquidity_animated_image',
      media_order: 'media_order',
      media_type_automation: 'media_type_automation',
      product_extensions: 'product_extensions',
      product_metadata_automation: 'product_metadata_automation',
      product_tags: 'product_tags',
      profile_card: 'profile_card',
      site_extensions: 'site_extensions',
      standard_enhancements: 'standard_enhancements',
      standard_enhancements_catalog: 'standard_enhancements_catalog',
      text_generation: 'text_generation',
      text_optimizations: 'text_optimizations',
      video_auto_crop: 'video_auto_crop',
      video_highlight: 'video_highlight',
    });
  }

}
