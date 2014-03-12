/**
 * NORAD TLE satellite's data.
 *  [[label,[line1,line2]],...]
 */
var TLEDATA2 = [
  ['ISS (ZARYA)',
  '1 25544U 98067A   12138.83290882  .00011789  00000-0  17152-3 0  5727',
  '2 25544  51.6409 274.1861 0010682 328.0828 128.1508 15.56173799773289' ],
  ['MOLNIYA 1-90',
  '1 24960U 97054A   04104.60038411 -.00000148  00000-0  10000-3 0  8467',
  '2 24960  64.1699 306.8439 7209074 272.6281  14.3196  2.00635799 48072' ],
  ['COSMOS 158 R/B',
  '1 02802U 67045B   04105.12224913  .00000082  00000-0  32618-4 0  5785',
  '2 02802  74.0096 111.2339 0069038 241.3647 118.0552 14.42132256935013' ]
];
// GLONASS observations at 20140214
var TLEDATA = [
  ['COSMOS 2411',
  '1 28509U 04053B   14043.80544267  .00000056  00000-0  10000-3 0  5502',
  '2 28509 063.1879 220.5982 0005958 137.7265 053.1785 02.13100546 71072'],
  ['COSMOS 2419',
  '1 28915U 05050A   14043.66948969  .00000010  00000-0  00000+0 0  3077',
  '2 28915 065.0125 107.0484 0016107 346.4741 087.5860 02.13110886 63322'],
  ['COSMOS 2425',
  '1 29670U 06062A   14044.19162984 -.00000072  00000-0  10000-3 0   132',
  '2 29670 065.8850 345.8145 0023609 343.6707 203.4541 02.13105030 55530'],
  ['COSMOS 2426',
  '1 29671U 06062B   14044.29511887 -.00000072  00000-0  10000-3 0   325',
  '2 29671 065.9023 345.8756 0015155 170.0309 323.5442 02.13103046 55549'],
  ['COSMOS 2424',
  '1 29672U 06062C   14043.55714868 -.00000076  00000-0  10000-3 0   366',
  '2 29672 065.8866 345.8439 0014616 169.8368 296.3843 02.13102024 55529'],
  ['COSMOS 2433',
  '1 32275U 07052A   14044.23392913  .00000017  00000-0  10000-3 0  7549',
  '2 32275 065.0268 106.7788 0003791 252.4746 156.5293 02.13105196 49052'],
  ['COSMOS 2432',
  '1 32276U 07052B   14044.39014267  .00000018  00000-0  10000-3 0  7451',
  '2 32276 065.0379 106.8276 0012268 333.1027 151.5009 02.13104445 49053'],
  ['COSMOS 2434',
  '1 32393U 07065A   14044.44428008 -.00000071  00000-0  00000+0 0  5928',
  '2 32393 065.5086 345.5335 0002095 089.6061 021.2621 02.13102704 47764'],
  ['COSMOS 2435',
  '1 32394U 07065B   14043.65239272 -.00000076  00000-0  10000-3 0  5025',
  '2 32394 065.5142 345.5577 0021298 355.2054 186.1257 02.13112034 47680'],
  ['COSMOS 2436',
  '1 32395U 07065C   14044.24165899 -.00000072  00000-0  10000-3 0  5054',
  '2 32395 065.5220 345.5695 0018573 349.5081 057.8040 02.13102872 47691'],
  ['COSMOS 2442',
  '1 33378U 08046A   14044.30005898  .00000018  00000-0  10000-3 0  5346',
  '2 33378 064.9423 106.2277 0023310 327.9001 185.7100 02.13103619 41913'],
  ['COSMOS 2443',
  '1 33379U 08046B   14043.51030328  .00000009  00000-0  10000-3 0  5211',
  '2 33379 064.9498 106.3065 0019921 189.0087 300.5131 02.13101587 41908'],
  ['COSMOS 2456',
  '1 36111U 09070A   14043.32539444  .00000066  00000-0  00000+0 0  2189',
  '2 36111 064.2499 225.4592 0004584 351.4200 145.9278 02.13101863 32403'],
  ['COSMOS 2457',
  '1 36112U 09070B   14043.53923126  .00000065  00000-0  00000+0 0  2007',
  '2 36112 064.2312 225.3975 0007213 140.6440 295.0741 02.13101549 32412'],
  ['COSMOS 2458',
  '1 36113U 09070C   14044.38868859  .00000060  00000-0  10000-3 0  2081',
  '2 36113 064.2368 225.3677 0003519 053.4260 000.1648 02.13101974 32434'],
  ['COSMOS 2459',
  '1 36400U 10007A   14044.41339427  .00000019  00000-0  10000-3 0  1375',
  '2 36400 064.9274 106.0371 0029337 351.0299 068.6505 02.13102460 30785'],
  ['COSMOS 2461',
  '1 36401U 10007B   14044.02540987  .00000015  00000-0  10000-3 0  1251',
  '2 36401 064.9202 106.0394 0004217 088.1343 304.3325 02.13102494 30776'],
  ['COSMOS 2460',
  '1 36402U 10007C   14043.64898067  .00000011  00000-0  10000-3 0  1384',
  '2 36402 064.9107 106.0400 0001786 226.5948 280.2471 02.13102120 30765'],
  ['COSMOS 2466',
  '1 37137U 10041A   14043.30546884 -.00000078  00000-0  10000-3 0   134',
  '2 37137 065.0931 346.1201 0018829 155.0975 026.0924 02.13102330 26831'],
  ['COSMOS 2465',
  '1 37138U 10041B   14044.46182633 -.00000072  00000-0  00000+0 0   163',
  '2 37138 065.1072 346.1360 0032943 169.6231 000.2353 02.13102765 26858'],
  ['COSMOS 2464',
  '1 37139U 10041C   14044.12767252 -.00000074  00000-0  00000+0 0    08',
  '2 37139 065.1100 346.1376 0022188 008.8426 039.2123 02.13102814 26850'],
  ['COSMOS 2471',
  '1 37372U 11009A   14043.43853479  .00000008  00000-0  10000-3 0  8786',
  '2 37372 064.9217 105.9873 0006998 238.9929 227.4242 02.13112561 23044'],
  ['COSMOS 2474',
  '1 37829U 11055A   14044.47594334  .00000060  00000-0  00000+0 0  7042',
  '2 37829 064.5719 225.4783 0005291 265.1178 260.0225 02.13101894 18422'],
  ['COSMOS 2476',
  '1 37867U 11064A   14043.34521785  .00000067  00000-0  00000+0 0  6641',
  '2 37867 064.5523 225.6209 0013744 257.2559 165.8582 02.13102049 17755'],
  ['COSMOS 2477',
  '1 37868U 11064B   14044.12320162  .00000062  00000-0  00000+0 0  6651',
  '2 37868 064.5614 225.6254 0011877 258.7300 221.0069 02.13101886 17722'],
  ['COSMOS 2475',
  '1 37869U 11064C   14044.46392022  .00000060  00000-0  00000+0 0  6628',
  '2 37869 064.5661 225.5956 0019506 287.9203 048.7434 02.13102109 17736'],
  ['COSMOS 2478',
  '1 37938U 11071A   14043.67137063  .00000011  00000-0  00000+0 0  6476',
  '2 37938 064.9408 106.1793 0014300 240.1659 194.0999 02.13102538 17335'],
  ['COSMOS 2485',
  '1 39155U 13019A   14043.43534001  .00000067  00000-0  00000+0 0  2310',
  '2 39155 064.7202 225.3810 0013724 249.9578 287.6630 02.13102113  6224']
];