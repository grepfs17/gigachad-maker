import { Config } from "@remotion/cli/config";
import { webpackOverride } from './src/webpack-override';

Config.setOverwriteOutput(true);
Config.setCodec('gif');
Config.setEveryNthFrame(2);
Config.setNumberOfGifLoops(2);
Config.setScale(0.5);
Config.setOutputLocation('out/gigachad.gif');

// Maybe try with multiple compositions
// Config.setEntryPoint('./src/index.ts');

Config.overrideWebpackConfig(webpackOverride);
