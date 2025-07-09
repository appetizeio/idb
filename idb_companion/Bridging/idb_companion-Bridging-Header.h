/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <Foundation/Foundation.h>

#include <sys/types.h>

int shmopen(NSString *path, int oflag, mode_t mode)
{
    return shm_open(path.UTF8String, oflag, mode);
}
