package yamini.newshub.summer.mobileproject.Adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;
import yamini.newshub.summer.mobileproject.Model.DataItem;
import yamini.newshub.summer.mobileproject.R;

public class DataItemAdapter extends RecyclerView.Adapter<DataItemAdapter.ExampleViewHolder> {

    private Context context;
    private List<DataItem> dataItems;

    public DataItemAdapter(Context context, List<DataItem> dataItems) {
        this.context = context;
        this.dataItems = dataItems;
    }

    @NonNull
    @Override
    public ExampleViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v= LayoutInflater.from(parent.getContext()).inflate(R.layout.database_list,parent,false);
        ExampleViewHolder evh=new ExampleViewHolder(v);
        return evh;
    }

    @Override
    public void onBindViewHolder(@NonNull ExampleViewHolder holder, int position) {
        final DataItem item = dataItems.get(position);
        holder.title.setText(item.getTitle());
        holder.delete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(context, "Row deleted", Toast.LENGTH_SHORT).show();
                //DeepNews dn=new DeepNews();
                /*dn.deleteRow(DatabaseItems.TABLE_ITEMS,DatabaseItems.COLUMN_TITLE,new String[]{item.getTitle()});*/
            }
        });
    }

    @Override
    public int getItemCount() {
        return dataItems.size();
    }

    public class ExampleViewHolder extends RecyclerView.ViewHolder {

        TextView title;
        ImageView delete;

        public ExampleViewHolder(@NonNull View itemView) {
            super(itemView);

            title=itemView.findViewById(R.id.titleSort);
            delete=itemView.findViewById(R.id.deleteItem);

        }
    }
}
