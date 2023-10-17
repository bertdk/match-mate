import { spawnSync } from 'child_process';
import { Hash, createHash } from 'crypto';
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
  rmdirSync,
  mkdirSync,
} from 'fs';
import { join } from 'path';

const dbRelatedFilesToCheckForChanges = [
  'apps/match/src/migrations/.snapshot.json',
  'libs/test-utils/src/core-db',
];
const hashFolder = `assets/db-hash`;

export default async function () {
  const hash = await computeHash();
  const hashFile = join(hashFolder, hash);
  if (existsSync(hashFile)) return;

  const res = spawnSync('pnpm', [
    'ts-node',
    `${process.cwd()}/libs/test-utils/src/core-db/loadTestCoreDb.ts`,
    '--run',
  ]);
  if (res.error) {
    throw res.error;
  }

  storeCurrentHash(hashFile);
}

function storeCurrentHash(hashFile: string) {
  if (existsSync(hashFolder)) rmdirSync(hashFolder, { recursive: true });
  if (!existsSync('assets')) mkdirSync('assets');
  if (!existsSync(hashFolder)) mkdirSync(hashFolder);
  writeFileSync(hashFile, '');
}

async function computeHash(): Promise<string> {
  const hash = createHash('sha256');
  hashPathsRecursively(dbRelatedFilesToCheckForChanges, hash);
  return hash.digest('hex');
}

function hashPathsRecursively(paths: string[], hash: Hash) {
  paths.forEach((p) => {
    const stat = statSync(p);
    if (stat.isFile()) hash.update(readFileSync(p));
    else if (stat.isDirectory())
      hashPathsRecursively(
        readdirSync(p).map((dirFilePath) => join(p, dirFilePath)),
        hash
      );
  });
}
