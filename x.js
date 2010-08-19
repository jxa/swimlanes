
function drawGrid() {
  var sl = new SwimLanes();

  sl.drawOn("canvas", 1000, 800);

  sl.addBranch("Prod", 0);
  sl.addCommit('a127846d', 0, 'Initial commit (Jim Weirich)');
  sl.addBranch("Development", 1);
  sl.addCommit('b17c3898', 1, 'Development Branch (Jim Weirich)');
  sl.addBranch("Feature 1", 2);
  sl.addCommit('c1f8c863', 2, 'Feature branch (Jim Weirich)');
  sl.addCommit('c2641c99', 2, 'Another feature branch (Jim Weirich)');
  sl.addBranch("Feature 2", 3);
  sl.addCommit('d146ab65', 3, 'Starting another feature (Jim Weirich)');
  sl.addCommit('b220bb37', 1, "Merge to dev", 'm');
  sl.addCommit('a27bf806', 0, 'Merge to production (Jim Weirich)', 'm');
  sl.addBranch("Feature 3", 4);
  sl.addCommit('f12f1158', 4, 'huh');
  sl.addCommit('d265be23', 3, 'fixed bugs (Jim Weirich)');
  sl.addCommit('f2e605dd', 4, 'bleh');
  sl.addCommit('b3f70bb', 1, 'Converted GitGrid to a class like object (Jim Weirich)');
  sl.addCommit('f346ab65', 4, 'meh');
  sl.addCommit('f497f0a5', 4, 'oops');
  sl.addCommit('b4f0bb37', 1, 'Renamed GitGrid to SwimLanes (Jim Weirich)');
  sl.addCommit('a3c2b1b7', 0, 'Merge to production (Jim Weirich)', 'm');

  sl.connect('a127846d', 'a27bf806');
  sl.connect('a27bf806', 'a3c2b1b7');
  sl.connect('a3c2b1b7', 'a444807b');

  sl.connect('b17c3898', 'b4f0bb37');

  sl.connect('c1f8c863', 'c2641c99');

  sl.connect('d146ab65', 'd265be23');

  sl.connect('f12f1158', 'f2e605dd');
  sl.connect('f2e605dd', 'f346ab65');
  sl.connect('f346ab65', 'f497f0a5');

  sl.connect('a127846d', 'b17c3898');
  sl.connect('a127846d', 'c1f8c863');
  sl.connect('a127846d', 'd146ab65');
  sl.connect('a27bf806', 'f12f1158');
  sl.connect('c2641c99', 'b220bb37');
  sl.connect('b220bb37', 'a27bf806');
  sl.connect('b4f0bb37', 'a3c2b1b7');
  sl.connect('f497f0a5', 'b4f0bb37');
  sl.connect('d265be23', 'b3f70bb');

  sl.render();
}

