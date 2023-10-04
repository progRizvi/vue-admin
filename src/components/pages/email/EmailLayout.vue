<template>
  <aside class="sm-side">
    <div class="user-head">
      <a class="inbox-avatar" href="javascript:;">
        <img src="../../../assets/image/1.png" alt="" />
      </a>
      <div class="user-name">
        <h5><a href="#">john doe</a></h5>
        <span><a href="#">example@gmail.com</a></span>
      </div>
    </div>
    <div class="inbox-body text-center">
      <a href="#myModal" data-toggle="modal" title="Compose" class="btn btn-compose"> Compose</a>
      <!-- Modal -->
      <div aria-hidden="true" role="dialog" tabindex="-1" id="myModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content text-left">
            <div class="modal-header">
              <button aria-hidden="true" data-dismiss="modal" class="close" type="button">
                <i class="ti-close"></i>
              </button>
              <h4 class="modal-title">Compose</h4>
            </div>
            <div class="modal-body">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="col-lg-2 control-label">To</label>
                  <div class="col-lg-10">
                    <input type="text" placeholder="" id="inputEmail1" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-2 control-label">Cc / Bcc</label>
                  <div class="col-lg-10">
                    <input type="text" placeholder="" id="cc" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-2 control-label">Subject</label>
                  <div class="col-lg-10">
                    <input type="text" placeholder="" id="inputPassword1" class="form-control" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-lg-2 control-label">Message</label>
                  <div class="col-lg-10">
                    <textarea
                      rows="10"
                      cols="30"
                      class="form-control"
                      id="texarea1"
                      name="texarea"
                    ></textarea>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-lg-offset-2 col-lg-10">
                    <span class="btn green fileinput-button"
                      ><i class="fa fa-plus fa fa-white"></i>
                      <span>Attachment</span>
                      <input type="file" name="files[]" multiple="" />
                    </span>
                    <button class="btn btn-primary" type="submit">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
    </div>
    <ul class="inbox-nav inbox-divider">
      <li class="breadcrumb-item active">
        <a href="#"
          ><i class="fa fa-inbox"></i> Inbox
          <span class="badge badge-success pull-right m-t-12">2</span></a
        >
      </li>
      <li>
        <a href="#"><i class="fa fa-envelope-o"></i> Sent Mail</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-bookmark-o"></i> Important</a>
      </li>
      <li>
        <a href="#"
          ><i class="fa fa-external-link"></i> Drafts
          <span class="badge badge-info pull-right m-t-12">30</span></a
        >
      </li>
      <li>
        <a href="#"><i class="fa fa-trash-o"></i> Trash</a>
      </li>
    </ul>

    <div class="inbox-body text-center">
      <div class="btn-group">
        <a class="btn mini btn-primary" href="javascript:;">
          <i class="fa fa-plus"></i>
        </a>
      </div>
      <div class="btn-group">
        <a class="btn mini btn-success" href="javascript:;">
          <i class="fa fa-phone"></i>
        </a>
      </div>
      <div class="btn-group">
        <a class="btn mini btn-info" href="javascript:;">
          <i class="fa fa-cog"></i>
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {}
</script>

<style>
</style>