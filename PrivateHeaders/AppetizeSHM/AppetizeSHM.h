/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#ifndef AppetizeSHM_h
#define AppetizeSHM_h

#include <sys/mman.h>
#include <sys/types.h>

/// `shm_open` is variadic, so Swift cannot call it. This fixes the argument count.
static inline int appetize_shm_open(const char *name, int oflag, mode_t mode) {
  return shm_open(name, oflag, mode);
}

#endif /* AppetizeSHM_h */
